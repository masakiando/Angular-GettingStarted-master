import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../../model';
@Component({
  selector: 'pm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
    console.log(this.courses);
  }
}
