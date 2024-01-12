import { Box } from "@/components/test3/Box";
import styles from "@/styles/Test3.module.css";
export default function Home() {
  const arr = [
    {
      imgUrl:
        "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2020/05/255077-04052020-1588581343-1415143443-thumbnail_alfredo_1600x1067.jpg",
      title: "Алфредо паста",
      share: "69",
      comment: "16",
    },
    {
      imgUrl:
        "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2020/04/254249-17042020-1587106634-31874877-thumbnail_IMG_2438.jpg",
      title: "Хоолны жор: Шаржигнуур тахианы далавч",
      share: "69",
      comment: "16",
    },
    {
      imgUrl:
        "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2023/11/313206-24112023-1700795216-677313549-images.jpg",
      title: "Миний санал болгох кино: 'The Devil, Probably'",
      share: "69",
      comment: "16",
    },
    {
      imgUrl:
        "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2023/11/313028-20112023-1700422041-343556142-%D1%85%D0%B8%D0%BB.jpeg",
      title: "Игорь: Америк хүрэх зам амар байгаагүй",
      share: "69",
      comment: "16",
    },
  ];
  return (
    <div className={styles.body}>
      <div className={styles.mainContainer}>
        {arr.map((el) => (
          <Box
            imgUrl={el.imgUrl}
            title={el.title}
            share={el.share}
            comment={el.comment}
          ></Box>
        ))}
      </div>
    </div>
  );
}
