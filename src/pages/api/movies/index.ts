import { NextApiRequest, NextApiResponse } from 'next';
import { api } from '../../../services/api';

export default async (request:NextApiRequest, response:NextApiResponse) => {
  if (request.method === 'GET') {
    try {
      const responseOriginals = await api.get(
        `${process.env.API_BASE}/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.API_KEY}&append_to_response=videos,images`
        );
      const responseActions = await api.get(
        `${process.env.API_BASE}/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.API_KEY}&append_to_response=videos,images`
      );
      const responseRomance = await api.get(
        `${process.env.API_BASE}/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.API_KEY}&append_to_response=videos,images`
      );

      const getResponse = [
        {
          slug: 'originals',
          title: 'Originais da Netflix',
          items: responseOriginals.data,
        },
        {
          slug: 'action',
          title: 'Ação',
          items: responseActions.data,
        },
        {
          slug: 'romance',
          title: 'Romance',
          items: responseRomance.data,
        },
      ]
        return response.json(getResponse);
    } catch (err) {
      response
          .status(501)
          .json({ error: `Sorry something Happened! ${err.message}` })
    }
  }
}