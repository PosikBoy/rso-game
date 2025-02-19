import QuestionPage from "@/components/pages/Question";
import data, { Question } from "@/data/data";

// Генерация статических параметров
export async function generateStaticParams() {
  return data.map((question) => ({
    id: question.id.toString(), // `id` должен быть строкой
  }));
}

// Получение данных из файлика
async function getQuestion(id: string) {
  const question = data.find((item) => item.id === Number(id));
  return question;
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //nextjs 15 😳
  const { id } = await params;

  const question = (await getQuestion(id)) as Question;

  if (!question) {
    return <div>Вопрос не найден</div>;
  }

  // Передаем question в клиентский компонент
  return <QuestionPage question={question} />;
}
