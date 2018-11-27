/**
 * @prettier
 * @flow
 */

import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { default as Photo } from '@material-ui/core/Avatar';
import AccessTime from '@material-ui/icons/AccessTime';
import { ellipsis } from 'polished';

export const Wrapper = styled.div`
  && {
    font-size: 12px;
    background-color: #fff;
    margin: 0 0 15px 0;
    transition: box-shadow 0.15s;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    padding: 10px;
  }
`;

// HEADER
export const Header = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 5px 0;
  }
`;

export const Name = styled.span`
  && {
    ${ellipsis('50%')};
  }
`;

export const A = styled(Link)`
  && {
    font-size: 14px;
    text-decoration: none;
    color: #3a8bff;
    font-weight: 600;
    line-height: 30px;
    flex: 1;
    padding: 0 10px 0 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    :hover {
      ${Name} {
        text-decoration: underline;
      }
    }
  }
`;

export const Overview = styled.span`
  && {
    position: relative;
    ${ellipsis('100%')};
  }
`;

export const Version = styled.span`
  && {
    font-size: 12px;
    padding: 0 0 0 10px;
    margin: 0 0 0 5px;
    color: #9f9f9f;
    position: relative;
    ${ellipsis('100%')} :before {
      content: '•';
      position: absolute;
      left: 0;
    }
  }
`;

export const Time = styled(AccessTime)`
  && {
    width: 14px;
    height: 14px;
    margin: 0 5px 0 0;
    color: #bfbfbf;
  }
`;

export const Published = styled.span`
  && {
    display: flex;
    color: #2f273c;
  }
`;

// Content
export const Field = styled.div`
  && {
    padding: 0 0 10px 0;
  }
`;

export const Content = styled.div`
  && {
    ${Field} {
      :last-child {
        padding: 0;
      }
    }
  }
`;

export const Label = styled.div`
  && {
    color: #908ba1;
    padding: ${({ hasContent = true }: boolean) => (hasContent ? '0 0 5px 0' : 0)};
  }
`;

export const Text = styled.div`
  && {
    color: #2f273c;
  }
`;

export const Author = styled.div`
  && {
    display: flex;
    align-items: center;
    ${Text} {
      padding: 0 0 0 5px;
    }
  }
`;

export const Avatar = styled(Photo)`
  && {
    width: 30px;
    height: 30px;
    border: 1px solid #4b5e40;
    background: #f9f9f9;
  }
`;

// Footer
export const Footer = styled.div`
  && {
    padding: 5px 0 0 0;
  }
`;

export const Tag = styled.span`
  && {
    vertical-align: middle;
    line-height: 22px;
    border-radius: 2px;
    color: #9f9f9f;
    background-color: hsla(0, 0%, 51%, 0.1);
    padding: 0.22rem 0.4rem;
    margin: 5px 10px 5px 0;
    ${ellipsis('300px')};
  }
`;
