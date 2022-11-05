import React from 'react';
import { useProjectStore } from '../stores/projectStore';
import './Project.scss';

interface ProjectProps {
    project: string;
    imgSrc: string;
    desc: string;
}

export const Project: React.FC<ProjectProps> = (props) => {

    const { project, imgSrc } = props;

    const { selectedProject } = useProjectStore();

    const projectRef = React.useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        useProjectStore.setState({ selectedProject: project })
    }



    return (
        <div className={"project" + ((selectedProject === project) ? ' selected' : '')} ref={projectRef} onClick={handleClick}>
            <div className="project__img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="name">
                {project}
            </div>
            <div className="description">
                {props.desc}
            </div>

        </div>
    );
}
