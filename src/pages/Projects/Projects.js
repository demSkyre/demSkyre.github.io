import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
          <ProjectItem>
            <ProjectTitle>E-Commerce Page</ProjectTitle>
            <p>Development of a Webpage using PHP, connection to a Microsoft 
              SQL server, HTML5 structures with CSS designs, implementation of 
              Bootstrap and more. Project was focused on Vehicle Spare Parts, 
              and was generated dynamically based on the contents of the database 
              tables. The team included 4 members, and the project was delivered 
              complete after the 3-month deadline.</p>
            <SkillContainer>
              <Pill>HTML</Pill>
              <Pill>CSS</Pill>
              <Pill>SQL</Pill>
              <Pill>PHP</Pill>
            </SkillContainer>
          </ProjectItem>
          <ProjectItem>
            <ProjectTitle>ITP Program</ProjectTitle>
            <p>Managed projects based on web development. Usage of Java as Java 
              Server Pages(JSP) and Spring Framework with integrated connection 
              to MySQL. JUnit Testing Java with Mockito for full integration of 
              code. Creation of Portfolio implementing ReactJS, HTML and CSS. 
              Managing Endpoints of a CRUD (GET, POST, PUT, DELETE). Creation of 
              FrontEnd with JavaScript ES6 connected to BackEnd.</p>
            <SkillContainer>
              <Pill>HTML</Pill>
              <Pill>CSS</Pill>
              <Pill>Java</Pill>
              <Pill>JavaScript</Pill>
              <Pill>ReactJS</Pill>
              <Pill>NodeJS</Pill>
              <Pill>MySQL</Pill>
            </SkillContainer>
          </ProjectItem>
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;