# login:

- Kiểm tra đăng nhập chưa: (giai đoạn sau)

  - Request:

    - method: GET
    - url: server_url/api/logged_in
    - data: {}
    - withCredentials: true // Gởi request nhớ có dòng này tại server set cần yêu cầu chứng chỉ

  - Response:
    - status: 200
    - data: {
      loggedIn: true/false,
      message: mô tả chi tiết
      }

- doSubmit khi ấn nút login

  - Request:

    - method: POST
    - url: server_url/api/login
    - data: {
      email: email,
      password: password
      }
    - withCredentials: true

  - Response:
    - status: 200
    - data: {
      success: true/false ứng với đăng nhập thành công hay thất bại,
      message: mô tả chi tiết,
      user: thông tin full về user, thất bại thì null,
      }

# register:

- Kiểm tra đăng nhập chưa: giống login

- doSubmit khi ấn register:

  - Request:

    - method: GET
    - url: server_url/api/register
    - data: {
      email: email,
      password: password,
      username: username,
      address: address,
      phone: phone,
      }
    - withCredentials: true

  - Response:
    - status: 200
    - data: {
      success: true/false,
      message: Mô tả chi tiết
      }

# logout

- Request:

  - method: GET
  - url: server_url/api/logout
  - data: {}
  - withCredentials: true

- Response:
  - status: 200
  - data: {
    success: true/false,
    message: mô tả chi tiết
    }

# change password

- Request:

  - method: POST
  - url: server_url/api/change_password
  - data: {
    oldPassword,
    newPassword
    }
  - withCredentials: true

- Response:
  - status: 200
  - data: {
    success: true/false,
    message: mô tả chi tiết
    }
- Note:
  Sau đó logout bắt đăng nhập lại do destroy session

# change user info:

- Note:

  - Tạm thời thì không cho đổi email, nếu muốn thì cũng có thể làm
  - Nếu mà không nhập thì gởi "" coi như không đổi

- Request:

  - method: POST
  - url: server_url/api/change_user_info
  - data: {
    newUsername,
    newAddress,
    newPhone,
    }
  - withCredentials: true

- Response:
  - status: 200
  - data: {
    success: true/false,
    message: mô tả chi tiết
    }

# reservation

- Note: database lưu thêm email để có gì phân biệt được
- Request:

  - method: POST
  - url: server_url/api/reservation
  - data: {
    numberOfPersons: number of persons, date: date, time: time, message: user message
    }
  - withCredentials: true

- Response:
  - status: 200
  - data: {
    success: true/false,
    message: mô tả chi tiết
    }
