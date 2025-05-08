import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <div className='ota'>
      <Card ism="Emaily Johnson" kasbi="Product Manager" soha="Product Development" bg="#FCF2E5"></Card>
      <Card ism="Arjun Patel" kasbi="Software Engineer" soha="Technology" bg="#FCF2E5"></Card>
      <Card ism="Carlos Hernández" kasbi="UI Designer" soha="Design" bg="#FCF2E5"></Card>
      <Card ism="Amina Idris" kasbi="Marketing Specialist" soha="Marketing" bg="#FCF2E5"></Card>
      <Card ism="Takumi Sato" kasbi="HR Specialist" soha="Human Resources" bg="white"></Card>
      <Card ism="Chen Wei" kasbi="Data Analyst" soha="Data Science"bg="white"></Card>
      <Card ism="Emma Dubois" kasbi="Sales Manager" soha="Sales"bg="white"></Card>
      <Card ism="Igor Sokolov" kasbi="Quality Assurance" soha="Quality Control"bg="white"></Card>

    </div>
  )
}

export default App
