import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const WorkItemLec = (props) => {
    return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <a className="text-base md:flex hover:opacity-80 ">
                    {props.title}<a className="text-blue-500 text-opacity-60">{props.language}</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />
                </a>
            </a>
        </>
    )
}
export default WorkItemLec;