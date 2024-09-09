import { Router } from "express";
import { StudentController } from "../controllers/StudentController";
import { StudentService } from "../services/StudentService";


const router=Router();

const studentService=new StudentService();

const studentController=new StudentController(studentService);


router.post("/students",studentController.createStudent);
router.get("/students",studentController.getAllStudents);
router.get("/students/:id",studentController.getStudentById);
router.put("/students/:id",studentController.updateStudent);
router.delete("/students/:id",studentController.deleteStudent);

export default router;