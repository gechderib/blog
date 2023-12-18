import Card from "./components/Card";

export default function Home() {
  const datas = [
    {
      "title": "Introduction to Python",
      "description": "A comprehensive and beginner-friendly guide to the Python programming language, covering core concepts, syntax, and practical examples for building applications and solving problems."
    },
    {
      "title": "Healthy Eating Habits",
      "description": "Discover a wealth of tips and delicious recipes aimed at maintaining a balanced and healthy diet. Learn how to make informed food choices that contribute to your overall well-being and vitality."
    },
    {
      "title": "Web Development Basics",
      "description": "Embark on a journey to master the fundamental concepts of web development and programming. Explore HTML, CSS, and JavaScript, and gain the skills needed to create dynamic and responsive web applications."
    },
    {
      "title": "Traveling on a Budget",
      "description": "Unlock the secrets of budget-friendly travel with practical tips on finding affordable accommodations, transportation, and entertainment. Make the most of your travel experiences without breaking the bank."
    },
    {
      "title": "Digital Photography Techniques",
      "description": "Elevate your photography skills with this collection of essential digital photography tips and tricks. From mastering composition to understanding camera settings, capture stunning photos with confidence."
    },
    {
      "title": "Mindfulness Meditation",
      "description": "Immerse yourself in the practice of mindfulness meditation. Explore guided sessions designed to reduce stress, enhance focus, and promote overall well-being. Cultivate a mindful and peaceful state of mind."
    },
    {
      "title": "DIY Home Decor Ideas",
      "description": "Unleash your creativity with a variety of budget-friendly and do-it-yourself home decor projects. Transform your living space into a personalized haven with these unique and stylish design ideas."
    },
    {
      "title": "Learning Spanish Basics",
      "description": "Embark on a language-learning adventure with this beginner's guide to mastering basic Spanish language skills. Build a foundation in grammar, vocabulary, and conversational Spanish for effective communication."
    },
    {
      "title": "Effective Time Management",
      "description": "Discover practical strategies and powerful tools to enhance your time management skills. Learn how to prioritize tasks, set goals, and maximize productivity to achieve your personal and professional objectives."
    },
    {
      "title": "Introduction to Machine Learning",
      "description": "Delve into the fascinating world of machine learning. Gain insights into the principles and applications of machine learning algorithms, and explore how this technology is shaping various industries and domains."
    }
  ]
  

  return (
    <div>
      <h1>NextJS Crash Course </h1>
      {datas.map(data => {
        return <Card title={data.title} description={data.description} />
      })}
    </div>
  )
}
// git commit --date "10 day ago" -m "styling module added" 