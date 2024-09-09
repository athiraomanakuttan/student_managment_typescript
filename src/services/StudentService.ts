import { Student } from "../models/Student";

export class StudentService{
    private students:Student[]=[]


    async createStudent(student:Student):Promise<Student>{
        student.id=this.students.length + 1;
        console.log("Adding Student:", student);
        this.students.push(student);
        console.log("Current Students:", this.students);
        return student;
    }

    async getAllStudents():Promise<Student[]>{
        return this.students;
    }

    async getAllStudentById(id:number):Promise<Student|undefined>{
        return this.students.find(student=>student.id===id)
    }


    async updateStudent(id:number,updatedStudent:Partial<Student>):Promise<Student |null>{
        const student = await this.getAllStudentById(id)
        if(!student) return null;

        Object.assign(student,updatedStudent);
        return student;
    }

    async deleteStudent(id:number):Promise<boolean>{

        const index =this.students.findIndex(student=>student.id ===id);
        if(index ===-1) return false;

        this.students.splice(index,1);
        return true;
    }
    
}