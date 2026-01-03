function CreateNewProblemForm() {
  return (
    <form>
      <label htmlFor="problemTitle">Problem Title</label>
      <input type="text" name="problemTitle" placeholder="Enter problem title"/>

      <label htmlFor="difficulty">Difficulty</label>
      <select name="difficulty" >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label htmlFor="problemDescription">Problem Description</label>
      
    </form>
  )
}
export default CreateNewProblemForm