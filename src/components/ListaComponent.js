import React, {useState} from 'react';
import {View} from 'react-native';
import ItensComponent from './ItensComponent';
import ItensDoadosComponent from './ItensDoadosComponent';

const listaItensMockup =
[
{
  entidade: 'Igreja São José',
  endereco: 'Rua José Mazeo, 124, Bebedouro - SP',
  descricao: 'A igreja procura desde a sua fundação ajudar as pessoas e entidades da cidade de Bebedouro.',
  telefone: '+551733457458',
},
{
  entidade: 'Centro Espírita Bebedouro',
  endereco: 'Rua Episcopal, 548, Bebedouro - SP',
  descricao: 'O centro procura a elevação do espírito de cada um do seus participantes por boas ações na sociedade.',
  telefone: '+5517984574848',
},
{
  entidade: 'Igreja Batista',
  endereco: 'Rua José Manoel, 188, Bebedouro - SP',
  descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
  telefone: '+551733458774',
},
{
  entidade: 'Basílica de São Pedro',
  endereco: 'Rua José Manoel, 188, Bebedouro - SP',
  descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
  telefone: '+551733458774',
},
{
  entidade: 'Capela Sistina',
  endereco: 'Rua José Manoel, 188, Bebedouro - SP',
  descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
  telefone: '+551733458774',
},
{
  entidade: 'Igreja do Vaticano',
  endereco: 'Rua José Manoel, 188, Bebedouro - SP',
  descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
  telefone: '+551733458774',
},
];
const ListaComponent = (props) => {


//   active: true
// createdAt: "2019-10-27T07:06:41.740Z"
// email: "tested@teste.com"
// name: "teste"
// password: "$2b$08$o9TqAHMl3lBQx8siiLZiF./g2xFSsmqIj.GfXZ2KQH2nzMzvlbOfC"
// __v: 0
// _id: "5db542015f78f50017ce898f"

  if (props.tipo === 'entidades') {
    return (
      <View>
        {props.list.map(item => (
          <ItensComponent
            descricao={item.description}
            endereco={item.address}
            entidade={item.name}
            key={item._id}
            telefone={item.contact}
          />
        ))}
      </View>
    );
  }
  if (props.tipo === 'doados') {
    return (
      <View>
        {props.list.map(item => (
          <ItensDoadosComponent
            createdAt={item.createdAt}
            descricao={item.products.detalhes}
            entidade={item.entidadeReceptora.name}
            key={item._id}
            produto={item.products.titulo}   
          />
        ))}
      </View>
    );
  }

}

export default ListaComponent;
