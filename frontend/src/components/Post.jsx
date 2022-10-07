import React, { useState } from 'react'
import './css/Post.css'
import { Avatar, Button } from '@mui/material';
import AD from '@mui/icons-material/ArrowDownwardRounded';
import AU from '@mui/icons-material/ArrowUpwardRounded';
import CB from '@mui/icons-material/ChatRounded';
import Mr from '@mui/icons-material/MoreHorizRounded';
import RO from '@mui/icons-material/RepeatOneRounded';
import Sh from '@mui/icons-material/ShareRounded';
import ArU from '@mui/icons-material/ThumbUp';
import ArD from '@mui/icons-material/ThumbDown';

import CloseIcon from '@mui/icons-material/CloseOutlined';
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import {motion} from "framer-motion";

function LastSeen({ date }) {
    return (
        <div>
            <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
        </div>
    )
}

function Post({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const Close = <CloseIcon />;
    const user = useSelector(selectUser);
    const handleQuill = (value) => {
        setAnswer(value);
    };

    const filterItem = (categItem) => {
        const newItems = answer.filter((curElem) => {
            return curElem.category === categItem;
        });
        setAnswer(newItems);
    }

    const handleSubmit = async () => {
        if (post?._id && answer !== "") {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = {
                answer: answer,
                questionId: post?._id,
                user: user,
            };
            await axios
                .post("/api/answers", body, config)
                .then((res) => {
                    console.log(res.data);
                    alert("Answer added succesfully");
                    setIsModalOpen(false);
                    window.location.reload(false);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };




    return (
        <motion.div className="post"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%"}}
            exit={{ opacity: 0 }}
        >
            {/* <div className="post__info">
                <Button className='but' onClick={ ()=> filterItem('general')}>Canteen</Button>
                <Button className='but'>Sports</Button>
                
            </div> */}
            <div className="post__info">
                <Avatar src={post?.user?.photo} />
                <p className='pst'>posted by</p>

                <p className='pstby'>{post?.user?.userName}
                
                
                </p>

                <small>
                    <LastSeen date={post?.createdAt} />
                </small>
                <div className="post__footerLeft">
                    <Sh />
                    <Mr />
                </div>

            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>{post?.questionName}</p>

                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            console.log(post?._id);

                        }}
                        className="post__btnAnswer"
                    >
                        Answer
                    </button>
                    <Modal
                        open={isModalOpen}
                        closeIcon={Close}
                        onClose={() => setIsModalOpen(false)}
                        closeOnEsc
                        center
                        closeOnOverlayClick={false}
                        styles={{
                            overlay: {
                                height: "auto",
                            },
                        }}
                    >
                        <div className="modal__question">
                            <h2>{post?.questionName}</h2>

                            <p>
                                asked by <span className="name">{post?.user?.userName}</span> on {""}
                                <span className="name">
                                    {new Date(post?.createdAt).toLocaleString()}

                                </span>
                            </p>
                        </div>
                        <div className="modal__answer">
                            <ReactQuill
                                value={answer}
                                onChange={handleQuill}
                                placeholder="Enter your answer"
                            />
                        </div>
                        <div className="modal__button">
                            <button className="cancle" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>

                            <button onClick={handleSubmit} type="submit" className="add">
                                Add Answer
                            </button>
                        </div>
                    </Modal>
                </div>
                {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
            </div>
            <div className="post__footer">
                {/* <div className="post__footerAction">
                    <AU />
                    <AD />
                </div>
                <RO />
                <CB /> */}
                {/* <div className="post__footerLeft">
                    <Sh />
                    <Mr />
                </div> */}
            </div>
            <p><span className='categ'>{post?.category}</span></p>
            <p
                style={{
                    color: "gray",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "15px 0",

                }}
            >
                {post?.allAnswers.length} Answer(s)
            </p>

            <div
                style={{
                    margin: "5px 0px 0px 0px ",
                    padding: "5px 0px 0px 20px",
                    borderTop: "1px solid lightgray",
                }}
                className="post__answer"
            >
                {post?.allAnswers?.map((_a) => (
                    <>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                padding: "10px 5px",
                                //borderTop: "1px solid lightgray",
                            }}
                            className="post-answer-container"
                        >
                            <div
                                style={{
                                    display: "flex",

                                    alignItems: "center",
                                    marginBottom: "10px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color: "#888",
                                }}
                                className="post-answered"
                            >
                                <Avatar src={_a?.user?.photo} />
                                <div
                                    style={{
                                        margin: "0px 10px",
                                    }}
                                    className="post-info"
                                >

                                    <p className='pstby'>{_a?.user?.userName}</p>

                                    <span>
                                        <LastSeen date={_a?.createdAt} />
                                    </span>
                                </div>
                            </div>


                            <div className="post-answer">
                                {/* <div className="arr">
                                <ArU/>
                                <p className='pstbyAns'>20</p>
                                <ArD />
                                </div> */}
                                <div className="pstAns">
                                    answered
                                </div>


                                {ReactHtmlParser(_a?.answer)}

                            </div>



                        </div>
                    </>
                ))}
            </div>
        </motion.div>
    )
}

export default Post