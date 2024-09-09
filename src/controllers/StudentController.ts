import { Request,Response } from "express";
import { StudentService } from "../services/StudentService";


export class StudentController{
    constructor(private studentService:StudentService){

    }

    createStudent = async(req:Request,res:Response)=>{
        
        try {
          const student=await this.studentService.createStudent(req.body)
         res.status(201).json(student)
            
        } catch (error) {
           res.status(500).json({message:"error in creating student",error})
            
        }
    }


    getAllStudents= async(_req:Request,res:Response)=>{
        try {
            const students= await this.studentService.getAllStudents();
            res.status(200).json(students)
            
        } catch (error) {
            res.status(500).json({message:"Error fetching students",error});
            
        }
    }

    getStudentById = async(req:Request,res:Response)=>{
        try {
            const student =await this.studentService.getAllStudentById(parseInt(req.params.id));
            if(student){
                res.status(200).json(student)
            }else{
                res.status(404).json({message:" Student not found "})
            }
            
        } catch (error) {
            res.status(500).json({message:"Error fetching student ",error})
            
        }

    }


    updateStudent =async(req:Request,res:Response)=>{
        try {

            const updatedStudent= await this.studentService.updateStudent(parseInt(req.params.id),req.body)
            
            if(updatedStudent){
                res.status(200).json(updatedStudent)
            }else{
                res.status(404).json({message:"student not fount"})
            }
        } catch (error) {
            res.status(500).json({message:"Error in updating student",error})
            
        }
    }

    deleteStudent=async(req:Request,res:Response)=>{
        try{
            const success = await this.studentService.deleteStudent(parseInt(req.params.id))
            if(success){
                res.status(204).end();

            }else{
                res.status(404).json({message:"student not found"})
            }
        }catch(error){
            res.status(500).json({message:"Error deleteing student ",error})
        }
    }
}