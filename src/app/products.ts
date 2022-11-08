export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Um aparelho grande com uma das maiores telas',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Um excelente aparelho com uma das melhores câmeras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Bom custo benefócio apenas com o essencial para o dia-a-dia',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
