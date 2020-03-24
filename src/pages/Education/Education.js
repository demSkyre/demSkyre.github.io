import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.position}</Institution>
              <div>
                <Degree>
                  {education.institution}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.end.year >= 2020 ? <span>{education.start.year} - PRESENT</span>
                   : <span>{education.start.year} - {education.end.year}</span>}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;

//{education.start.year} to {education.end.year}