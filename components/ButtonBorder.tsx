import React from "react";

interface Props {
    url: string;
    text: string;
}

const ButtonBorder: React.FC<Props> = ({url,text}) => {
    return <a href={url} className="text-white border-2 px-5 py-2 mt-7 hover:bg-white hover:text-biru hover:font-semibold hover:mb-1 transition-all delay-100">{text}</a>
}

export default ButtonBorder;