import React from 'react';
import { HELLO } from '../constants';
import ReactClassComponent from './ReactClassComponent';
import ReactPureComponent from './ReactPureComponent';

export default () => (
  <>
    <h2>{`${HELLO} from functional components!`}</h2>
    <ReactClassComponent greeting={HELLO} />
    <ReactPureComponent greeting={HELLO} />
  </>
);
