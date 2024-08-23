import { useParams } from "react-router-dom";
import Container from "../../Components/Navbar/container/Container";
import Button from "../../Components/button/Button";

function ProductPage() {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10  p-6">
            <h1 className="text-right">عنوان محصول</h1>
            <div>
              <p className="text-right">قیمت: 25 تومان</p>
              <p className="text-right">
                البته مهم‌ترین مزیت لپ‌تاپ و درواقع وجه تمایز آن با رایانه‌های
                رومیزی این است که شما سر کار، حین پرواز، یا وقتی در کافه
                نشسته‌اید و قهوه نوش جان می‌کنید. در تمام این موارد می‌توانید از
                لپ‌تاپ استفاده کنید. اما گذشته از این مورد شاید بتوان به مواردی
                دیگر نیز اشاره کرد: کوچک و قابل حمل بودن انعطاف پذیری صفحه کلید
                با قابلیت تاشو بودن سروصدای کمتر در هنگام کار کردن
              </p>
            </div>
          </div>
          <div className=" col-span-2 bg-sky-200 p-4">
            <img
              className="rounded"
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-3-001-3000x1682:VP2-859x540"
            />
            <Button className="w-full mt-2" variant="primary">
              {" "}
              add to cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductPage;
