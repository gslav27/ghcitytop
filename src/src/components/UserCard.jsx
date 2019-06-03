import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { ghUserInterface } from '../utilities/types/interfaces';
import IconLocation from './ui/Icons/Location';
import IconEmail from './ui/Icons/Email';
import LoadingPlaceholder from './ui/LoadingPlaceholder';



const LI = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 0px;
  margin: 0px 10px;
  border-top: 1px solid ${({ theme }) => theme.palette.colors.lightGrey};
  &:first-child { border-top: none };
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    margin: 0px 20px;
    padding: 20px 0px;
  `)}
`;

const Avatar = styled.img`
  width: 75px;
`;

const TextBlock = styled.div`
  flex: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`;

const Title = styled.h4`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: baseline;
  margin: 0 0 10px;
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    flex-direction: row;
  `)}
`;

const Bio = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
`;

const Contacts = styled.p`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.palette.colors.grey};
  font-size: 14px;
  margin: 0;
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    flex-flow: row nowrap;
    align-items: center;
  `)}
`;

const Text = styled.span`
  padding: ${({ padding }) => padding || 0};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  white-space: nowrap;
  color: 'inherit';
`;

const TextWithIcon = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  &:first-child { padding-bottom: 5px; };
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    flex-flow: row nowrap;
    align-items: center;
    padding-bottom: 0px !important;
  `)}
`;

// align text after icons in mobile version (due to thinner "location" icon)
const StyledIconLocation = styled(IconLocation)`
  margin-right: 3px;
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    margin-right: 0px;
  `)}
`;

const Link = styled.a`
  color: ${({ theme }) => theme.palette.colors.blue};
  text-decoration: none;
  &:visited { color: ${({ theme }) => theme.palette.colors.blue}; }
  &:hover { text-decoration: underline; }
`;

const Name = styled.span`
  font-size: 13px;
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    font-size: 0.9em;
    font-weight: 300;
    padding: 0 0 0 10px;
  `)}
`;

const ImgPlaceholder = styled(LoadingPlaceholder)`
  margin: 0;
  min-width: 75px;
`;



function UserCard({
  login,
  name,
  email,
  location,
  url,
  bio,
  avatarUrl,
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <LI>
      {
        !imgLoaded && <ImgPlaceholder height='75px' width='75px' />
      }
      <Avatar
        src={avatarUrl}
        alt="user's avatar"
        title='avatar'
        style={!imgLoaded ? { display: 'none' } : {}}
        onLoad={() => setImgLoaded(true)}
      />
      <TextBlock>
        <Title>
          <Link
            href={url}
            target='_blank'
            title={`see "${login}" on GitHub`}
          >
            {login}
          </Link>
          <Name>
            {name}
          </Name>
        </Title>
        {
          bio && <Bio>{bio}</Bio>
        }
        <Contacts>
          <TextWithIcon>
            <StyledIconLocation />
            <Text padding='0 15px 0 0px'>{location}</Text>
          </TextWithIcon>
          {
            email && (
              <TextWithIcon>
                <IconEmail />
                <Text padding='0 0 0 3px'>{email}</Text>
              </TextWithIcon>
            )
          }
        </Contacts>
      </TextBlock>
    </LI>
  );
}

UserCard.propTypes = ghUserInterface;

export default UserCard;
