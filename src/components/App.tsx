import * as React from 'react';
import { Button } from "antd";
import './App.css';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => {
  return (
    <h1>
      Hi {props.userName} from React! Welcome to {props.lang}!
      <Button type="primary">Button</Button>
    </h1>
  );
}