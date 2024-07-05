/* eslint-disable react/prop-types */

import { LinkedinIcon } from 'lucide-react';
import { LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const SharePost = ({appear}) => {
    return (
        <div className={`bg-gray-300 ${appear} flex gap-2 dark:bg-[#18191a] p-2 py-[6px] mb-1 rounded-full absolute bottom-full -left-16 sm:left-0`}>
            <WhatsappShareButton url={window.location.href}>
                <WhatsappIcon size={25} className='rounded-full'/>
            </WhatsappShareButton>
            <TelegramShareButton url={window.location.href}>
                <TelegramIcon size={25} className='rounded-full'/>
            </TelegramShareButton>
            <TwitterShareButton url={window.location.href}>
                <TwitterIcon size={25} className='rounded-full'/>
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href}>
                <LinkedinIcon size={25} className='rounded-full'/>
            </LinkedinShareButton>
        </div>
    );
}

export default SharePost;