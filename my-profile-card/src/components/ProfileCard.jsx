import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const CardContainer = styled.div`
  width: 350px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  margin: 20px;
`;

const Banner = styled.div`
  height: 120px;
  background: linear-gradient(45deg, #6e48aa, #9d50bb);
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid white;
  object-fit: cover;
  margin: -60px auto 0;
  display: block;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h2`
  text-align: center;
  margin: 20px 0 5px;
  color: #333;
`;

const Title = styled.p`
  text-align: center;
  color: #6e48aa;
  font-weight: 600;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  padding: 0 30px 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #555;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  color: #6e48aa;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #6e48aa;
    color: white;
    transform: translateY(-3px);
  }
`;

const ProfileCard = ({ 
  name = "Kurt Justine Waga", 
  title = "Frontend Developer", 
  email = "kurtwaga46@gmail.com", 
  phone = "+63 (123) 456-7890", 
  location = "Balulang, CDO",
  github = "https://github.com",
  linkedin = "https://linkedin.com",
  twitter = "https://twitter.com",
  imageUrl = "/profile.jpg" // ✅ use public image path

}) => {
  return (
    <CardContainer>
      <Banner />
      <ProfileImage src="/profile.jpg" alt={name} />
      <Name>{name}</Name>
      <Title>{title}</Title>
      
      <InfoSection>
        <InfoItem>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: '#6e48aa' }} />
          {email}
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px', color: '#6e48aa' }} />
          {phone}
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px', color: '#6e48aa' }} />
          {location}
        </InfoItem>
      </InfoSection>
      
      <SocialIcons>
        <SocialIcon href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
      </SocialIcons>
    </CardContainer>
  );
};

export default ProfileCard;