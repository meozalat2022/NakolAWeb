import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-auto  ">
      <h2 className="text-center">خطأ</h2>
      <p className="text-center">لا توجد صفحة بهذا الأسم</p>
      <Link className="flex justify-center items-centers" href="/">
        العودة للرئيسية
      </Link>
    </div>
  );
}
