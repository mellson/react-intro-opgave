/**
 Det er vigtigt at både jsx og css importeres fra emotion.
 Ellers virker det ikke.
 Desværre er der nogle auto-imports der fjerner dem.
 */
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

function App() {
  return (
    <div
      css={css`
        text-align: center;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <h1>ReactRegner</h1>
    </div>
  );
}

export default App;
