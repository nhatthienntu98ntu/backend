## App Structure

```
- index.ts          Start app
- connectDB.ts      Kết nối database
- api/              Chứa các endpoint của app (controllers và routes)
- config/           Load biến môi trường từ .env
- helpers/          Là các hàm thực hiện một số chức năng dùng chung trong app
- interfaces/       Các interface của app
- middleware/       Chứa các middleware mà app sử dụng
- models/           Các database model
- services/         Chức business logic
- typings/          Khai báo type cho typescript (d.ts)
- utils/            Là những hàm nhỏ, thực hiện một số chức năng không liên quan tới luồng của request - response, ví dụ như: tạo log, generate token, generate id, ...
- validations/      Chức các validation middleware
```
