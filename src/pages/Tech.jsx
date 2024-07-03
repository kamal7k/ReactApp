import { DiAndroid, DiAngularSimple, DiApple, DiAppstore, DiPerl, DiPython } from "react-icons/di";
const Tech = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Tech i use</h1>
      <div className="dev-icons grid grid-cols-4 space-y-4">
        <DiAndroid size={200}/>
        <DiPython size={200}/>
        <DiPerl size={200}/>
        <DiApple size={200}/>
        <DiAngularSimple size={200}/>
        <DiAppstore size={200}/>
        
                               

      </div>
    </div>
  )
};

export default Tech