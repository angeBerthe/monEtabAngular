export const environmentProd = {
  baseUrl: "http://localhost:8081/api",
    endPoint: {
      login:"authenticate",
      student: {
        getAll: "students",
        getOne: "students",
        create: "students",
        delete: "students"
      },
      teacher: {
        getAll: "teachers",
        getOne: "teachers",
        create: "teachers",
        delete: "teachers"
      },
      user: {
        getAll: "users",
        getOne: "users",
        create: "users",
        delete: "users"
      },

  }
}