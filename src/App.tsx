import { styled } from 'styled-components';
import { useHandlerState } from './hooks/codeGenerator.ts';
import { codeGenerator } from './hooks/codeGenerator.ts';
import { useState } from 'react';
import { validateVersion } from './validators/validateVersion.ts';
import { formatDate } from './hooks/formatDate.ts';
import { validateHtml } from './validators/validateHtml.ts';
import { cleanContent } from './hooks/contentCleaner.ts';
import { formatHtml } from './hooks/autoFormatHtml.ts';
import CustomDatePicker from './components/DatePicker.tsx';
import HtmlEditor from './components/HtmlEditor.tsx'; 
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';
import Label from './components/Label.tsx';
import TextBox from './components/Textbox.tsx';
import LivePreview from './components/LivePreview.tsx';

// General styles for the application
const Display = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 2px solid red;
  border-radius: 25px;
  box-shadow: #6E6E6E 3px 3px;
`;

// General styles for the application
const FormDisplay = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: #6E6E6E 3px 3px;
  padding: 10px;
  gap:10px;
  margin: 8px;
`;

const FormInputElement = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

const FormResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const App = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  // input handlers
  const { value: inputVersion, handleChange: handleChangeVersion } = useHandlerState();
  const { value: inputContent, setValue: setInputContent } = useHandlerState();

  // handler for the editor content 
  const handleEditorChange = (newValue: string) => {
    setInputContent(newValue); 
  };

  // Code generation function
  const generateCode = (startDate: Date | null, inputVersion: string, inputContent: string) => {

    //tries to clean the content before the validations
    const inputContentCleaned = cleanContent(inputContent);
    const formattedContent = formatHtml(inputContentCleaned);
    setInputContent(formattedContent);

    //version validation
    if (!validateVersion(inputVersion)) {
      alert('Invalid version format. Please use the format X.Y.Z or X.Y (e.g., 1.0.0)');
      return;
    }

    if (!validateHtml(inputContentCleaned)){
      alert('Invalid content format. Please check the Html parsing')
      return;
    }

    const dateString = formatDate(startDate); // format the date
    const code = codeGenerator(dateString!, inputVersion, inputContentCleaned)(); // Generate the code
    setCodeValue(code); // update the state with the generated code
  };

  const [code, setCodeValue] = useState<string>(''); //state to store the generated code

  // Function to handle indenting the content
  const handleIndentContent = () => {
    const cleanedContent = cleanContent(inputContent)
    const indentedContent = formatHtml(cleanedContent); 
    setInputContent(indentedContent); 
  };

  return (
    <Display>
      <FormDisplay>
        <FormContent>
          <FormInputElement>
            <Label id="label_version" text="Version:" />
            <Input
              id="input_version"
              placeholder="X.Y.Z"
              value={inputVersion}
              onChange={handleChangeVersion} 
            />
          </FormInputElement>

          <FormInputElement>
            <Label id="label_date" text="Date:" />
            <CustomDatePicker
              value={startDate} 
              onChange={setStartDate} 
            />
          </FormInputElement>

          {/* HTML content editor */}
          <Label id="label_content" text="Content:" />
          <HtmlEditor
            value={inputContent}
            onChange={handleEditorChange} //pass the handler with formatting
          />
        </FormContent>

        <FormInputElement>
        <Button
            id="button_indent"
            onClick={handleIndentContent}  
            text="Indent Content"
          />
          <Button
            id="button_generate"
            onClick={() => generateCode(startDate, inputVersion, inputContent)}  
            text="Generate"
          />
        </FormInputElement>

        <FormResult>
          <TextBox id="textBox_code" placeholder="Code will generate here" value={code} />
        </FormResult>
      </FormDisplay>

      <FormDisplay>
        <LivePreview htmlContent={inputContent}></LivePreview>
      </FormDisplay>

    </Display>
  );
};
