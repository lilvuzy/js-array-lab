// with thanks to https://catalog.jmu.edu/content.php?filter%5B27%5D=CS&filter%5B29%5D=&filter%5Bcourse_type%5D=-1&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=50&expand=&navoid=2576&search_database=Filter#acalog_template_course_filter

// probably helpful to have a few more in here
const data = {
  items: [
    {
      prefix: "CS",
      number: 149,
      title: "Introduction to Programming",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257219",
      desc: "Fundamental problem-solving techniques using a modern programming language. Topics include variables, input/output, decisions, loops, functions, arrays, and objects. Students learn about algorithm development, testing strategies, and software tools.",
      prereqs: [],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 159,
      title: "Advanced Programming",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=257220",
      desc: "Students use advanced problem-solving strategies to develop algorithms using classes and objects and techniques such as recursion, exceptions and file I/O. This course also focuses on designing small applications and effective testing strategies.",
      prereqs: [149],
      credits: 3,
    },
    {
      prefix: "CS",
      number: 343,
      title: "Application Development",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=264748",
      desc: "Overview of application software development fundamentals and their use in building stand-alone applications, visualizing and interacting with complex data representations, and controlling the Internet of Things. This course provides an introduction to the technologies used to create modern user interfaces (e.g., web technologies), establishing a common foundation for later application-focused courses.",
      prereqs: [159],
      credits: 3,
    },
    {
      prefix: "MATH",
      number: 232,
      title: "Calculus with Functions II",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=258749",
      desc: "A continuation of MATH 231. Calculus topics include limits and derivatives of transcendental functions, the theory of integration and basic integration techniques. NOTE: MATH 231-232 together are equivalent to MATH 235 for all prerequisites. Not open to students who have already earned credit in MATH 234 or MATH 235.",
      prereqs: [231],
      credits: 3,
    },
    {
      prefix: "MATH",
      number: 103,
      title: "The Nature of Mathematics",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=258697",
      desc: "Topics such as geometry, computing, algebra, number theory, history of mathematics, logic, probability, statistics, modeling and problem solving intended to give students insight into what mathematics is, what it attempts to accomplish and how mathematicians think.",
      prereqs: [],
      credits: 3,
    },
    {
      prefix: "ISCI",
      number: 101,
      title: "Physics, Chemistry, and the Human Experience",
      url: "https://catalog.jmu.edu/preview_course_nopop.php?catoid=50&coid=258390",
      desc: "A survey of fundamental scientific ideas and principles, and ideas of chemistry and physics. Particular emphasis is placed on understanding the development of these principles and their application in understanding the world around us.",
      prereqs: [],
      credits: 3,
    },
  ],
};
