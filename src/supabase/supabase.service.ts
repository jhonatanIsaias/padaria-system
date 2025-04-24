// src/supabase/supabase.service.ts
import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    if( process.env.SUPABASE_URL !== undefined && process.env.SUPABASE_SERVICE_ROLE_KEY !== undefined){
        this.client = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY
          );
          return;
    }
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
