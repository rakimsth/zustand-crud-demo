// FOR REACTNATIVE (Adding Async Storage)
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

type course = {
  id: number;
  title: string;
  completed: boolean;
};

type courseState = {
  courses: course[];
  addCourse: (course: Partial<course>) => void;
  removeCourse: (id: number) => void;
  toggleCourseStatus: (id: number, value: boolean) => void;
};

export const courseStore = (set: any) => ({
  courses: [],
  addCourse: (course: course) => {
    set((state: any) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId: number) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId: number, value: boolean) => {
    set((state) => ({
      courses: state.courses.map((course: course) =>
        course.id === courseId ? { ...course, completed: value } : course
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist<courseState>(courseStore, {
      name: "courses",
      // getStorage: () => AsyncStorage, // (optional) by default, 'localStorage' is used
    })
  )
);

export default useCourseStore;
