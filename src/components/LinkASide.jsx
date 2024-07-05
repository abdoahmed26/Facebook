/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkASide = ({title,com,url}) => {
    return (
        <Link to={url} className="flex items-center gap-3 p-2 font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#3a3b3c]">
            <span>{com}</span>
            <span className="dark:text-gray-300">{title}</span>
        </Link>
    );
}

export default LinkASide;
