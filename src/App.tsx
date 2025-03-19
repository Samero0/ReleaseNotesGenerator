import { styled } from 'styled-components';
import { useHandlerState } from './hooks/codeGenerator.ts';
import { codeGenerator } from './hooks/codeGenerator.ts';
import { useState } from 'react';
import { validateVersion } from './validators/validateVersion.ts';
import { formatDate } from './hooks/formatDate.ts';
import { validateHtml } from './validators/validateHtml.ts';
import { cleanContent } from './hooks/contentCleaner.ts';
import { formatHtml } from './hooks/autoFormatHtml.ts';
import { copyToClipboard } from './hooks/useClipboard.ts';
import CustomDatePicker from './components/DatePicker.tsx';
import HtmlEditor from './components/HtmlEditor.tsx';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';
import Label from './components/Label.tsx';
import TextBox from './components/Textbox.tsx';
import LivePreview from './components/LivePreview.tsx';
import Clickableimg from './components/ClickableImg.tsx';
import clipBoardIcon from './assets/clipBoard.svg'

const Display = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const FormDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: fit-content;
  border: 2px solid #383838;
  border-radius: 25px;
  padding: 10px;
  gap:10px;
  margin: 8px;
`;

const PreviewDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  border: 2px solid #383838;
  border-radius: 25px;
  padding: 20px;
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

const ImgDisplay = styled.div`
  display: flex;
  justify-content: end;
`;

const FormResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

    const { isValid, errorMessage } = validateHtml(inputContentCleaned);
    if (!isValid) {
      alert(errorMessage);  
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

          <Label 
            id="label_content" 
            text="Content:" 
          />
          <HtmlEditor
            value={inputContent}
            onChange={handleEditorChange}
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

        <ImgDisplay>
          <Clickableimg 
            imageSrc={clipBoardIcon} 
            alt='clipboard' 
            active={code.trim() !== ""} 
            onClick={() => {copyToClipboard(code)}}
            tooltip='Copy to clipboard'
          />
        </ImgDisplay>

        <FormResult>
          <TextBox 
            id="textBox_code" 
            placeholder="Code will generate here" 
            value={code} 
          />
        </FormResult>

      </FormDisplay>

      <PreviewDisplay>
        <LivePreview 
          htmlContent={inputContent}
        />
      </PreviewDisplay>

    </Display>
  );
};
