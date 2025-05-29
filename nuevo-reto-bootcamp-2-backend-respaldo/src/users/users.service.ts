import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {
  async getRandomUsers(count = 10) {
    const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
    return response.data.results.map((user) => ({
      nombre: `${user.name.first} ${user.name.last}`,
      genero: user.gender,
      ubicacion: `${user.location.city}, ${user.location.country}`,
      correo: user.email,
      fechaNacimiento: user.dob.date,
      fotografia: user.picture.medium,
    }));
  }
}