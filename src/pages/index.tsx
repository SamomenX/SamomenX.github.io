import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import { 
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineReddit,
    AiOutlineMail,
} from 'react-icons/ai';

import { 
    GitHubButton,
    TwitterButton,
    MailButton,
    PrivacyGuideX 
} from "../components/Button";
import { useState, useEffect } from "react";

//thx github.com/alii and /cnrad
export async function getServerSideProps(ctx: any) {
    let body: any = await fetch("https://api.lanyard.rest/v1/users/711325368333893722").then((res: any) => res.json());

    return {
        props: { body },
    };
}

const Home: NextPage = ({ body }: any) => {
    const [data, setData ] = useState(body.data);
    useEffect(() => {
        setInterval(async () => {
            let newBody: any = await fetch("https://api.lanyard.rest/v1/users/711325368333893722").then((res: any) =>
                res.json()
            );
            setData(newBody.data);
        }, 4000);
    }, []);
    console.log(data);
    
    return (
        <>
            <Head>
                <link rel="icon" href="https://keybase.io/images/icons/icon-keybase-logo-48.png" />
                <meta
                    name="description"
                    content="Samomen's personal website"
                />
                
                <meta
                    property="og:image"
                    content={`https://cdn.discordapp.com/avatars/711325368333893722/${data.discord_user.avatar}.webp?size=128`}
                />
                <meta name="og:title" content="UwU"/>
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="min-w-screen min-h-screen rounded-b-md shadow-lg overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center justify-start p-7 w-[33rem] md:w-[30rem] bg-[#000] bg-opacity-50 rounded-lg">
                    <div className="w-full flex flex-row items-center justify-start">
                        <img
                            src={`https://cdn.discordapp.com/avatars/711325368333893722/${data.discord_user.avatar}.webp?size=128`}
                            className="w-[8rem] h-[8rem] rounded-md"
                            alt="UwU"
                        />
                        <div className="ml-4 flex flex-col items-start justify-center font-mono text-white ">
                            <p className="md:text-xl">Samomen</p>
                            <p className="text-l">Web Developer I'm improving myself on Cyber Security and Game Development</p>
                            
                        </div>
                    </div>
                    <div className="mt-3 w-full flex flex-row items-center justify-center h-[rem] gap-4 ">
                    <a
                        href="https://github.com/SamomenX"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineGithub className="w-8 h-8"/>
                    </a>
                    <a
                        href="https://twitter.com/SamomenX"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineTwitter className="w-8 h-8"/>
                    </a>
                    <a
                        href="https://new.reddit.com/user/GodSamomen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineReddit className="w-8 h-8"/>
                    </a>
                    <a
                        href="mailto:uwu@red-panda.ninja"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineMail className="w-8 h-8"/>
                    </a>
                    </div>
                </div>
           </div>
        </>
    );
};

export default Home;
