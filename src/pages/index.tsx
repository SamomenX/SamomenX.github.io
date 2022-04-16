import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { GitHubButton, TwitterButton, MailButton, PrivacyGuideX } from "../components/Button";
import { useState, useEffect } from "react";

//thx alistair and cnrad
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
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute w-[100vw] h-[100vh] flex items-center justify-center">
                <div className="flex flex-col items-center justify-start p-8 w-[33rem] bg-[#000] bg-opacity-60 rounded-lg ">
                    <div className="w-full flex flex-row items-center justify-start mb-6">
                        <img
                            src={`https://cdn.discordapp.com/avatars/711325368333893722/${data.discord_user.avatar}.webp?size=128`}
                            className="w-[8rem] h-[8rem] rounded-md"
                            alt="UwU"
                        />
                        <div className="ml-6 flex flex-col items-start justify-center">
                            <p className="font-mono text-white md:text-2xl mb-2">Samomen</p>
                            <p className="font-mono text-white md:text-l">Web Developer and I'm improving myself on Cyber Security and Game Development</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-start h-[3rem] gap-4 ">
                        <GitHubButton />
                        <TwitterButton />
                        <MailButton />
                        <PrivacyGuideX />
                    </div>
                </div>
           </div>
        </>
    );
};

export default Home;
