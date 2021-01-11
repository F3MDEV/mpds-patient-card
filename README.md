<p align="center">
  <a href="https://mpds.f3m.pt/" rel="noopener" target="_blank"><img width="350" src="https://i.imgur.com/OANOfLI.png" alt="MPDS logo"></a></p>
</p>

<h1 align="center">MpDS Patient Card</h1>

<div align="center">

[React](https://reactjs.org/) component for faster and simpler web development.
<!--
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm next package](https://img.shields.io/npm/v/@material-ui/core/next.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/next.svg)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=next)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.material-ui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/material-ui) -->

</div>

## Installation

MpDS Patient Card is available as an [npm package](npm i mpds-patient-card).

```sh
// with npm
npm i mpds-patient-card

```
## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from "react";
import MpdsPatientCard from "mpds-patient-card"

function App() {
  return <MpdsPatientCard hasImage="false" idCardName="Francisco Medina"></MpdsPatientCard>
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

<h4>Props</h4>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>idCardPhoto</span>
      </td>
      <td>
        <div>
          <span>Photo given to the IdCard.</span>
        </div>
        <div>
          <div>
            <span>any</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>hasImage</span>
      </td>
      <td>
        <div>
          <span>If the card doesn't got an image, it will load a default avatar on it.</span>
        </div>
        <div>
          <div>
            <span>boolean</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>idCardName</span>
      </td>
      <td>
        <div>
          <span>Name of the person in the card.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>idCardTypeDoc</span>
      </td>
      <td>
        <div>
          <span>Type of the document.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>idCardIdentification</span>
      </td>
      <td>
        <div>
          <span>Id of the card.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>RoomCode</span>
      </td>
      <td>
        <div>
          <span>Code of the room.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>RoomCodeTopic</span>
      </td>
      <td>
        <div>
          <span>Letter choseen for the room topic.</span>
        </div>
        <div>
          <div><span>string</span></div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>BedCode</span>
      </td>
      <td>
        <div>
          <span>Code of the bed.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>BedCodeTopic</span>
      </td>
      <td>
        <div>
          <span>Letter choseen for the bed topic.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
      </tr>
      <tr>
        <td>
          <span>valueOneTitle</span>
        </td>
        <td>
          <div>
            <span>Title of the first value.</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>valueTwoTitle</span>
        </td>
        <td>
          <div>
            <span>Title of the second value.</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>valueThreeTitle</span>
        </td>
        <td>
          <div>
            <span>Title of the third value.</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
        <td>
          <span>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>valueFourTitle</span>
        </td>
        <td>
          <div>
            <span>Title of the fourth value.</span>
          </div>
          <div>
            <div>
              <span>string</span>
            </div>
          </div>
        </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>valueFiveTitle</span>
      </td>
      <td>
        <div>
          <span>Title of the fifth value.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>valueOne</span>
      </td>
      <td>
        <div>
          <span>Value number one.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>valueTwo</span>
      </td>
      <td>
        <div>
          <span>Value number two.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>valueThree</span>
      </td>
      <td>
        <div>
          <span>Value number three.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>valueFour</span>
      </td>
      <td>
        <div>
          <span>Value number four.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>valueFive</span>
      </td>
      <td>
        <div>
          <span>Value number five.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>nameHealthProfessional</span>
      </td>
      <td>
        <div>
          <span>Name of the health professional.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span></td>
    </tr>
    <tr>
      <td>
        <span>dateNextIntervention</span>
      </td>
      <td>
        <div>
          <span>Date of the next intervention.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>dateLastIntervention</span>
      </td>
      <td>
        <div>
          <span>Date of the last intervention.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>selectPatient</span>
      </td>
      <td>
        <div>
          <span>Select Patient.</span>
        </div>
        <div>
          <div>
            <span>any</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>selectIntervention</span>
      </td>
      <td>
        <div>
          <span>Select Intervention.</span>
        </div>
        <div>
          <div>
            <span>any</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>colorOfTheText</span>
      </td>
      <td>
        <div>
          <span>Color of the text.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>colorBottomLink</span>
      </td>
      <td>
        <div>
          <span>Color of the bottom link.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>textOfBottomLink</span>
      </td>
      <td>
        <div>
          <span>Text given to the bottom link.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>clickedLink</span>
      </td>
      <td>
        <div>
          <span>Callback when bottom link is clicked.</span>
        </div>
        <div>
          <div>
            <span>any</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>colorText</span>
      </td>
      <td>
        <div>
          <span>Color of the main text.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
  </tbody>
</table>
<br>
Yes, it's really all you need to get started! Try it in:
[CodeSandbox](https://codesandbox.io/)
<br>

## License

No License. "(...) nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation."
