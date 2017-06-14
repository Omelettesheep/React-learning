//main.js
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello.jsx';
import LikeButton from './components/demo2.jsx'
import CheckLink from './components/demo3.jsx'
import Mixins from './components/mixins.jsx'
import LikeButtonToEs6 from './components/LikeButtonToEs6.jsx'
import propsSend from './components/propsSend.jsx'
import FormInput from './components/FormInput.jsx'

ReactDom.render(
	<div>
	 	<Hello />
    	<LikeButton />
    	<CheckLink href="http://www.react-cn.com/checked.html" name='yy'>
    		Click here!
  		</CheckLink>
  		<Mixins></Mixins>
  		<LikeButtonToEs6 yy='yy'></LikeButtonToEs6>
  		<propsSend checked={true} onClick={console.log.bind(console)}>
    		Hello world!
  		</propsSend>
  		<FormInput />
	</div>
   ,
    document.getElementById('content')
);
