import { Component, signal, computed, effect, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy  {

  counter = signal(10)

  user = signal<User>(
    {
      id: 1,
      email: 'john_doe@gmail.com',
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://reqres.in/img/faces/1-image.jpg'
    }
  )

  fullName = computed(() => this.user().first_name + ' ' + this.user().last_name)

  userChangeEffect = effect(() => {

  })

  ngOnDestroy(): void {
  //  this.userChangeEffect.destroy()
  }


  onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // }

    this.user.update(current => {

      const newUser = { ...current }

      switch (field) {
        case 'email':
          newUser.email = value
          break
        case 'first_name':
          newUser.first_name = value
          break
        case 'last_name':
          newUser.last_name = value
          break
        case 'avatar':
          newUser.avatar = value
          break
        case 'id':
          newUser.id = parseInt(value)

      }
      return newUser
    })
  }
}
