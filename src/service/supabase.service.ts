import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('https://CLIENT_URL.supabase.co', 'ANON_KEY');
  }

  async uploadFile(bucketName: string, filePath: string, file: File) {
    const { data, error } = await this.supabase
      .storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    return data;
  }

  getFileUrl(bucketName: string, filePath: string) {
    const { data } = this.supabase
      .storage
      .from(bucketName)
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  }
}