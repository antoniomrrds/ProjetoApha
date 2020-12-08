import java.io.*;
import java.util.*;

public class inclusao {
	public static class Clientes {
		 public char ativo;
		 public int codCliente;
		 public String nomeCliente;
		 public float vlrCompra;
		 public int anoPrimeiraCompra;
		 public boolean emDia;
		  }

	public static void main(String[] args) {
		 Clientes clientes = new Clientes();
		 RandomAccessFile arquivo;
		 Scanner leia = new Scanner(System.in);
		 boolean encontrou;
		 String CODCLI;
		 char confirmacao;
		 do {
			 do {
			 System.out.println(" *************** INCLUSAO DE ALUNOS ***************** ");
			 System.out.print("Digite a Matrícula do Aluno( FIM para encerrar): ");
			 CODCLI = leia.nextLine();
			 if (CODCLI.equals("FIM")) {
			 break;
			 }
			 encontrou = false;
			 try {
			 arquivo = new RandomAccessFile("CLIENTES.DAT", "rw");
			 while (true) {
			 clientes.ativo = arquivo.readChar();
			 clientes.codCliente = arquivo.readInt();
			 clientes.nomeCliente = arquivo.readUTF();
			 clientes.vlrCompra = arquivo.readFloat();
			 clientes.anoPrimeiraCompra = arquivo.readInt();
			 clientes.emDia = arquivo.readBoolean();
			 if ( CODCLI.equals(clientes.codCliente) && clientes.ativo == 'S') {
			 System.out.println("Cliente já cadastrada, digite outro valor\n");
			 encontrou = true;
			break;
			 }
			 }
			 arquivo.close();
			 }catch (EOFException e) {
			 encontrou = false;
			 }catch (IOException e) {
			 System.out.println("Erro na abertura do arquivo - programa será finalizado");
			 System.exit(0);
			}
			 }while (encontrou);
			 if (CODCLI.equals("FIM")) {
			 System.out.println("\n ************ PROGRAMA ENCERRADO ************** \n");
			 break;
			 }
		
}
