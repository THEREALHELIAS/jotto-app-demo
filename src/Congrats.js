import React from 'react';

/**
 * Functional react component component form congratulatory message
 * @function
 * 
 */

export default (props) => {

  if(props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! you guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats"/>
    )
  } 
}