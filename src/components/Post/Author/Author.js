// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        👋 Stay up to date with me on Twitter&nbsp;
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>@{author.contacts.twitter}</strong>

          <br/>
        </a>

        ☕️ Enjoy my content? Consider supporting me by&nbsp;
        <a
          className={styles['author__bio-kofi']}
          href="https://ko-fi.com/christopherkade"
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>buying me a coffee</strong>

          <br/>
        </a>
      </p>
    </div>
  );
};

export default Author;
