import { Chip, List, ListItem, ListItemText } from "@mui/material";
import {
  Footer,
  Input,
  Text,
  MessageWrapper,
  InputContainer,
  SendIconContainer,
  // Sidebar,
} from "./styles";
import { getQuestionSuggestions, queryGenAI } from "./Chatbot/queryGenAI";
import { useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { speackOutLoud } from "./Chatbot/speackOutLoud";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EBarChartMulti from "./Chatbot/eBarChartMulti";
import EPieChart from "./Chatbot/ePieChart";
import DataTable from "./Chatbot/DataTable";
import UserChatIcon from "./Chatbot/userChat";
import BotimgDarkMode from "./Chatbot/BotimgDarkMode";
import { MicOutlined, SendRounded } from "@mui/icons-material";
import "./Chatbot/styles.css";

const ChatBot = () => {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState();
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);
  const [prompt, setPrompt] = useState(true);
  const [speackOutLoudEnabled, setspeackOutLoud] = useState(false);
  const [theme, setTheme] = useState('light');
  const [apiData, setApiData] = useState();
  const [lastSql, setLastSql] = useState("");
  const [datasetName, setDatasetName] = useState("mahindra");
  const [questionSuggestions, setSuestionSuggestions] = useState([]);

  const fetchSuggestedQuestion = async () => {
    setPrompt(false);
    const questionListsRes = await getQuestionSuggestions(datasetName);
    setSuestionSuggestions(questionListsRes?.data?.questionSuggestion || []);
    setPrompt(true);
  };

  useEffect(() => {
    setText("");
    setMsg();
    setMessages([]);
    setPrompt(true);
    setApiData();
    setLastSql("");
    if (datasetName) {
      fetchSuggestedQuestion();
    }
  }, [datasetName]);

  const languageList = {
    en: {
      api: "en",
      stt: "en-IN",
      tts: "en-English"
    },
    zh: {
      api: "zh-CN",
      stt: "zh-CN",
      tts: "zh-Chinese"
    },
    ms: {
      api: "ms",
      stt: "ms-MY",
      tts: "ms"
    }
  };

  const [language, setLanguage] = useState('en');
  const {
    transcript,
    finalTranscript,
    interimTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListenSpeech = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: languageList[language].stt
    });

    SpeechRecognition.getRecognition().onend = () => {
      console.log('getRecognition end')
      stopListenSpeech()
    }
  }

  useEffect(() => {
    if (finalTranscript) {
      console.log('Got final result:', finalTranscript);
      setText(finalTranscript);
      // setMsg({ author: "user", data: finalTranscript, html: finalTranscript });
      // sendMessage(finalTranscript);
      // setText("");
      // setPrompt(false);
    } else if (interimTranscript) {
      setText(interimTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  const stopListenSpeech = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  }

  const handleNewChatClick = () => {
    setText("");
    setMsg();
    setMessages([]);
    setPrompt(true);
    setApiData();
    setLastSql("");
  };

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  const updateSpeakOutLoud = () => {
    setspeackOutLoud(!speackOutLoudEnabled);
  }

  const sendMessage = async (data) => {
    const result = await queryGenAI(data, messages.slice(-2), apiData, lastSql, datasetName);
    let resultText = result?.data?.result;
    console.log(resultText, "SERVER DATA");
    let html = resultText;
    setLastSql(result?.data?.sql_query);
    setSuestionSuggestions(result?.data?.questionSuggestion);
    if (speackOutLoudEnabled) speackOutLoud(resultText);

    if (result?.data?.is_plottable) {
      let dataArray = null;
      try {
        const jsonString = result?.data?.message;
        dataArray = jsonString;
        setApiData(dataArray);
        // dataArray = JSON.parse(jsonString);
        // Check if jsonString is an empty array
        if (Array.isArray(jsonString) && jsonString.length === 0) {
          dataArray = null;
        } else if (Array.isArray(jsonString)) {
          const hasSinglePropertyObjects = jsonString.every(
            (obj) => Object.keys(obj).length === 1
          );

          if (hasSinglePropertyObjects) {
            dataArray = null; // Set dataArray to null if all objects have only one property
          } else {
            dataArray = jsonString;
            console.log("body-77: ", dataArray);
          }
        } else {
          dataArray = jsonString;
          console.log("body-77: ", dataArray);
        }
      } catch (error) {
        // Handle JSON parsing error
        dataArray = null;
      }

      console.log(dataArray);
      html = (<div><ReactMarkdown children={html} remarkPlugins={[remarkGfm]} />
        {dataArray &&
          (result?.data?.displyType == "bar chart" ? <EBarChartMulti data={dataArray} />
            : (result?.data?.displyType == "pie chart" ? <EPieChart data={dataArray} />
              : result?.data?.displyType == "data table" ? <DataTable data={dataArray} /> : ""))}
      </div>)
      console.log(html, "............................");
    }
    setMsg({ author: "bot", data: resultText, html: html });
    setPrompt(true);

    document.body.style.overflow = "hidden";
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    if (msg) {
      setMessages([...messages, msg]);
    }
    document.body.style.overflow = "hidden";
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [msg]);

  const handleClick = () => {
    if (prompt && text.length) {
      setMsg({ author: "user", data: text, html: text });
      sendMessage(text);
      setText("");
      setPrompt(false);
    }
  };

  const setSuggestedQuestion = (e) => {
    setText(e.target.outerText);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className={`box ${theme}`} style={{ backgroundColor: "#F3F6FC" }}>
        <MessageWrapper mobile={true} ref={messageListRef}>
          {messages.map((message, index) => (
            <List
              // disablePadding
              disableGutters={true}
              disablePadding={true}
              key={index}
              style={{
                margin: "0px !important",
              }}
            >
              <ListItem
                disablePadding={true}
                disableGutters={true}
                style={{
                  margin: "0px !important",
                }}
              >
                <Text
                  mobile={true}
                  style={{
                    background: message.author === "bot" ? "white" : "#F3F6FC",
                    color: message.author === "bot" ? "#0f0f0f" : "white",
                    display: "flex",
                  }}
                >
                  {/* className="bot-response" */}
                  {message.author === "bot" ? (
                    <div style={{ flex: "0 0 5%", paddingRight: "5px" }}>
                      <BotimgDarkMode />
                    </div>
                  ) : (
                    <div style={{ flex: "0 0 5%", paddingRight: "5px" }}>
                      <UserChatIcon theme={theme} changeTheme={() => changeTheme()} />
                    </div>
                  )}
                  <div style={{ flex: 1, margin: "0px !important" }}>
                    <ListItemText
                      disablePadding={true}
                      disableGutters={true}
                      disableTypography={true}
                      // primary={message.data.trim()}
                      style={{
                        color: message.author === "bot" ? "black" : "black",
                        fontSize: "16px",
                        paddingLeft: message.author === "bot" ? "10px" : "24px",
                        fontFamily: "Sans-Serif",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {message.html}
                    </ListItemText>
                  </div>
                </Text>
                {/* </div> */}
              </ListItem>
            </List>
          ))}

          {!prompt && messages.length > 0 && <ListItem disablePadding={true} disableGutters={true} style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>

            <Text
              mobile={true}
              style={{
                background: "white",
                marginTop: "0px",
                marginBottom: "0px",
                display: "flex",
              }}
            >
              <div style={{ flex: "0 0 5%", paddingRight: "5px" }}>
                <BotimgDarkMode />
              </div>
              <div style={{ flex: 1, margin: "0px !important" }} >

                <ListItemText
                  primary={"...."}
                  style={{
                    whiteSpace: "pre-wrap",
                    color: "black",
                    fontSize: "16px",
                    fontFamily: "Sans-Serif",
                  }}
                ></ListItemText>
              </div>
            </Text>
          </ListItem>}

        </MessageWrapper>
        <Footer style={{ left: "10%", top: !text && prompt && questionSuggestions.length ? "85%" : "83%" }} mobile={true}>
          <InputContainer mobile={true}>
            <div style={{ maxWidth: "55vw" }}>{!text && prompt && questionSuggestions.map(val => {
              const questionVal = val.trim().replace(/^1./g, '').replace(/^2./g, '').replace(/^3./g, '').replace(/^-/g, '');
              return (<Chip label={questionVal} variant="outlined" onClick={setSuggestedQuestion} />);
            })}</div>
            <div>
              <Input
                mobile={true}
                type="text"
                name="text"
                value={text}
                placeholder="Type Something..."
                autoComplete="off"
                onChange={handleChange}
                disabled={!prompt}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleClick();
                  }
                }}
                style={{ borderRadius: '20px', marginLeft: '-80px', backgroundColor: "white", color: "black", height: "30px" }}
              />
              <SendIconContainer style={!text && prompt ? { top: "55%", transform: "translateY(0%)" } : { top: "25%", transform: "translateY(0%)" }} mobile={true}>
                <div>
                  <SendRounded className="sendroundedicon"
                    onClick={handleClick}
                  />

                  <MicOutlined
                    style={{ color: listening ? "red" : "black" }}
                    className={listening ? "microundedicon-active" : "microundedicon"}
                    onTouchStart={startListenSpeech}
                    onMouseDown={startListenSpeech}
                    onTouchEnd={() => {
                      stopListenSpeech();

                    }}
                    onMouseUp={stopListenSpeech}
                  />
                </div>
              </SendIconContainer>
            </div>
          </InputContainer>
        </Footer>
      </div >
    </>);
};
export default ChatBot;