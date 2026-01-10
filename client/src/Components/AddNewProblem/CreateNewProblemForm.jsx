import Button from '../Utility/Button'
import Dropdown from '../Utility/Dropdown'
import Input from '../Utility/Input'
import ProblemEditor from './ProblemEditor'

function CreateNewProblemForm() {
  return (
    <form className="my-5 px-7 py-1">
      <Input
        htmlForLabel={'problemTitle'}
        labelValue={'Problem Title'}
        inputType={'text'}
        inputName={'problemTitle'}
        placeholder={'Enter problem title'}
        classesForDiv={'flex flex-col mb-6'}
        classesForLabel={'font-medium mb-3'}
        ClassesForInput={'border border-gray-300 p-2'}
      />

      <Dropdown
        classesForDiv={'flex flex-col mb-6'}
        classesForDropdown={'border border-gray-300 w-[10%] p-2'}
        classesForLabel={'font-medium mb-2'}
        htmlForLabel={'difficulty'}
        labelValue={'Difficulty'}
        nameForDropdown={'difficulty'}
        valuesForDropdown={['Easy', 'Medium', 'Hard']}
      />

      <label htmlFor="problemDescription" className="font-medium">
        Problem Description
      </label>
      <ProblemEditor />

      <div className="flex justify-between w-[45%] p-4 border border-gray-300 rounded">
        <Input
          classesForDiv={'w-[40%] flex flex-col'}
          classesForLabel={'mb-3'}
          ClassesForInput={'border border-gray-300 p-1'}
          labelValue="Input Format:"
          htmlForLabel={'inputFormat'}
          inputName={'inputFormat'}
          inputType={'text'}
        />

        <Input
          classesForDiv={'w-[40%] flex flex-col'}
          classesForLabel={'mb-3'}
          ClassesForInput={'border border-gray-300 p-1'}
          labelValue="Output Format:"
          htmlForLabel={'outputFormat'}
          inputName={'outputFormat'}
          inputType={'text'}
        />
      </div>

      <p className="font-medium mt-4 mb-2">Examples</p>
      <div className="flex justify-between w-[45%] p-2 border border-gray-300 rounded">
        <Input
          classesForDiv={'w-[40%] flex flex-col'}
          classesForLabel={'mb-3'}
          ClassesForInput={'border border-gray-300 p-1'}
          labelValue="Input"
          htmlForLabel={'input'}
          inputName={'input'}
          inputType={'text'}
        />

        <Input
          classesForDiv={'w-[40%] flex flex-col'}
          classesForLabel={'mb-3'}
          ClassesForInput={'border border-gray-300 p-1'}
          labelValue="Expected Output"
          htmlForLabel={'output'}
          inputName={'output'}
          inputType={'text'}
        />
      </div>

      <div>
        <p>Test Cases</p>
        {/* TODO: Have to design form for adding test cases */}
        <button>Add Test Case</button>
      </div>

      <div className="w-[45%] flex justify-end py-2">
        <Button
          classesForBtn={
            'border border-gray-300 mx-5 px-5 py-1 rounded font-medium bg-gray-100'
          }
          btnName={'Cancel'}
        />
        <Button
          classesForBtn={
            'border border-gray-300 px-5 py-1 rounded font-medium bg-yellow-600 text-white'
          }
          btnName={'Publish Problem'}
        />
      </div>
    </form>
  )
}
export default CreateNewProblemForm
