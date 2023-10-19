import React from "react";
import styled from "styled-components";

const AIAssistantSection = () => {
  return (
    <Wrapper>
      <Content>
      
        <SectionHeader>AI based Clinical Assistant</SectionHeader>
        <SectionDescription>
          Our AI assistant significantly reduces consultation time, allowing
          clinicians to see more patients in less time. This means shorter
          waiting times for patients and higher efficiency for clinicians.
        </SectionDescription>
        

        <ImageContainer>
          {/* Increase the width and height of the first image */}
          <Image
            src="./images/CAB.svg"
            // alt="AI vs. Doctor"
            width="1200"
            height="1000"
          />
        </ImageContainer>
        
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  padding: 40px 0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 20px;
`;

const HeaderQuestion = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const SectionHeader = styled.h2`
  font-size: 28px;
  color: #333;
  margin-top: 40px;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto; /* Maintain aspect ratio */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SubsectionHeader = styled.h3`
  font-size: 24px;
  color: #333;
  margin: 40px 0 20px;
`;

const TimeSavingsDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
`;

// const AccuracyDescription = styled.p`
//   font-size: 16px;
//   color: #666;
//   margin-bottom: 40px;
// `;

const BarChartContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const BarChart = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto; /* Maintain aspect ratio */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionFooter = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 40px;
`;

export default AIAssistantSection;
