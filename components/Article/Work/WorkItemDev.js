import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const WorkItemDev = (props) => {
    return (
        <>
            <div className="flex-col">
                <Link href={props.link}>
                    <a className="text-base md:flex md:p-1 hover:opacity-80 ml-4">
                        {props.title}<a className="text-blue-500 text-opacity-60">{props.language}</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />
                    </a>
                </Link>
            </div>
        </>
    )
}
export default WorkItemDev;