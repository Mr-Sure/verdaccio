/**
 * @prettier
 * @flow
 */

import React from 'react';
import type { Element } from 'react';

import Icon from '../Icon';
import { formatDate, formatDateDistance } from '../../utils/package';

import { IProps } from './types';
import { Wrapper, Header, Content, A, Name, Field, Label, Text, Footer, Tag, Author, Avatar, Overview, Version, Time, Published } from './styles';

const Package = ({ label, version, time, author: { name = 'Anonymous', avatar = '' }, description = '', keywords = [] }: IProps): Element<Wrapper> => (
  <Wrapper>
    <Header>
      {label && (
        <A to={`detail/${label}`}>
          <Name>{label}</Name>
          {version && <Version>{`${version} version`}</Version>}
        </A>
      )}
      <Overview>
        {time && (
          <Published>
            <Time />
            {`Published on ${formatDate(time)} • ${formatDateDistance(time)} ago`}
          </Published>
        )}
      </Overview>
    </Header>
    <Content>
      <Field>
        <Label>Author</Label>
        <Author>
          <Avatar alt={name} src={avatar}>
            {!avatar && <Icon img name="verdaccio" />}
          </Avatar>
          <Text>{name}</Text>
        </Author>
      </Field>
      <Field>
        <Label hasContent={!!description}>Description</Label>
        <Text>{description}</Text>
      </Field>
    </Content>
    {keywords.length > 0 && (
      <Footer>
        {keywords.map((keyword, index) => (
          <Tag key={index}>{keyword}</Tag>
        ))}
      </Footer>
    )}
  </Wrapper>
);

export default Package;
