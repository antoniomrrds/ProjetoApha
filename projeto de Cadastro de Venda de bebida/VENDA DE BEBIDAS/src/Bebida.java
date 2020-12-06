import java.io.*;

public class Bebida {

	char ativo;
	String codVenda;
	String nomeCliente;
	String codProduto;
	String descProduto;
	String dtVenda;
	int quantidade;
	float precoUnitario;
	float vlrImpostos;

	static String vetCodProdutos[] = { "WJM", "CSL", "CBL", "CCO", "GAN", "WCB", "WBL", "VCT", "VTM", "SLT" };
	static String vetDescProdutos[] = { "Whisky Johny Walker", "Cerveja Skol Lata", "Cerveja Brahma Lata",
			"Coca Cola 2lts", "Guaraná Antártica 2lts", "Whisky Cavalo Branco", "Whisky Ballantines",
			"Vinho Concha Y Toro", "Vinho Tinto Miolo", "Suco Laranja Tropicana" };
	static String vetCategorias[] = { "destilado alcoólico importado", "fermentado alcoólico nacional",
			"fermentado alcoólico nacional", "sem álcool nacional", "sem álcool nacional",
			"destilado alcoólico importado", "destilado alcoólico importado", "alcoólico importado",
			"alcoólico nacional", "sem álcool importado" };

	public long pesquisarVenda(String codVendaPesq) {
		// metodo para localizar um registro no arquivo em disco
		long posicaoCursorArquivo = 0;
		try {
			RandomAccessFile arqVendas = new RandomAccessFile("VENDAS.DAT", "rw");
			while (true) {
				posicaoCursorArquivo = arqVendas.getFilePointer(); // posicao do
																	// inicio do
																	// registro
																	// no
																	// arquivo
				ativo = arqVendas.readChar();
				codVenda = arqVendas.readUTF();
				nomeCliente = arqVendas.readUTF();
				codProduto = arqVendas.readUTF();
				descProduto = arqVendas.readUTF();
				dtVenda = arqVendas.readUTF();
				quantidade = arqVendas.readInt();
				precoUnitario = arqVendas.readFloat();
				vlrImpostos = arqVendas.readFloat();

				if (codVendaPesq.equals(codVenda) && ativo == 'S') {
					arqVendas.close();
					return posicaoCursorArquivo;
				}
			}
		} catch (EOFException e) {
			return -1; // registro nao foi encontrado
		} catch (IOException e) {
			System.out.println("Erro na abertura do arquivo  -  programa sera finalizado");
			System.exit(0);
			return -1;
		}
	}

	public void salvarVenda() {
		// metodo para incluir um novo registro no final do arquivo em disco
		try {
			RandomAccessFile arqVendas = new RandomAccessFile("VENDAS.DAT", "rw");
			arqVendas.seek(arqVendas.length()); // posiciona o ponteiro no final
												// do arquivo (EOF)
			arqVendas.writeChar(ativo);
			arqVendas.writeUTF(codVenda);
			arqVendas.writeUTF(nomeCliente);
			arqVendas.writeUTF(codProduto);
			arqVendas.writeUTF(descProduto);
			arqVendas.writeUTF(dtVenda);
			arqVendas.writeInt(quantidade);
			arqVendas.writeFloat(precoUnitario);
			arqVendas.writeFloat(vlrImpostos);
			arqVendas.close();
			System.out.println("Dados gravados com sucesso !\n");
		} catch (IOException e) {
			System.out.println("Erro na abertura do arquivo  -  programa sera finalizado");
			System.exit(0);
		}
	}

	public void desativarVenda(long posicao) {
		// metodo para alterar o valor do campo ATIVO para N, tornando assim o
		// registro excluido
		try {
			RandomAccessFile arqVendas = new RandomAccessFile("VENDAS.DAT", "rw");
			arqVendas.seek(posicao);
			arqVendas.writeChar('N'); // desativar o registro antigo
			arqVendas.close();
		} catch (IOException e) {
			System.out.println("Erro na abertura do arquivo  -  programa sera finalizado");
			System.exit(0);
		}
	}

	// *********************** INCLUSAO *****************************
	public void incluir() {
		String codVendaChave;
		char confirmacao;
		long posicaoRegistro;

		do {
			do {
				Main.leia.nextLine();
				System.out.println("\n ***************  INCLUSAO DE VENDAS  ***************** ");
				System.out.print("Digite o Codigo Da Venda( FIM para encerrar): ");
				codVendaChave = Main.leia.nextLine();
				if (codVendaChave.equals("FIM")) {
					break;
				}
				posicaoRegistro = pesquisarVenda(codVendaChave);

				if (posicaoRegistro >= 0) {
					System.out.println("Codigo da Venda ja cadastrada, digite outro valor\n");
				}
			} while (posicaoRegistro >= 0);

			if (codVendaChave.equals("FIM")) {
				break;
			}

			ativo = 'S';
			codVenda = codVendaChave;
			System.out.print("Digite o nome do Cliente.........................: ");
			nomeCliente = Main.leia.nextLine();
			System.out.print("Digite o Codigo do Produto .......: ");
			codProduto = Main.leia.next();

			descProduto = "";// devera receber o retorno do metodo
								// validaCodProduto

			System.out.println("Descriçao do Produto .......: " + descProduto);

			System.out.print("Digite a data da Venda .......: ");
			dtVenda = Main.leia.next();
			System.out.print("Digite a Quantidade do Produto)...................: ");
			quantidade = Main.leia.nextInt();
			System.out.print("Digite o Preco Unitario ..................: ");
			precoUnitario = Main.leia.nextFloat();

			vlrImpostos = 0; // deverá receber o retorno do metodo calcular
								// Impostos

			System.out.println("Valor dos Impostos por Item  ..................: " + vlrImpostos);

			System.out.println("Valor Final da  Venda   ..................: "
					+ (quantidade * precoUnitario + quantidade * vlrImpostos));

			do {
				System.out.print("\nConfirma a gravacao dos dados (S/N) ? ");
				confirmacao = Main.leia.next().charAt(0);
				if (confirmacao == 'S') {
					salvarVenda();
				}
			} while (confirmacao != 'S' && confirmacao != 'N');

		} while (!codVenda.equals("FIM"));
	}

	// ************************ ALTERACAO *****************************
	public void alterar() {
		String matriculaChave;
		char confirmacao;
		long posicaoRegistro = 0;
		byte opcao;

		do {
			do {
				Main.leia.nextLine();
				System.out.println("\n ***************  ALTERACAO DE ALUNOS  ***************** ");
				System.out.print("Digite a Matricula do Aluno que deseja alterar( FIM para encerrar ): ");
				matriculaChave = Main.leia.nextLine();
				if (matriculaChave.equals("FIM")) {
					break;
				}

				posicaoRegistro = pesquisarAluno(matriculaChave);
				if (posicaoRegistro == -1) {
					System.out.println("Matricula nao cadastrada no arquivo, digite outro valor\n");
				}
			} while (posicaoRegistro == -1);

			if (matriculaChave.equals("FIM")) {
				break;
			}

			ativo = 'S';

			do {
				System.out.println("[ 1 ] Nome do Aluno............: " + nomeAluno);
				System.out.println("[ 2 ] Data de nascimento ......: " + dtNasc);
				System.out.println("[ 3 ] Valor da mensalidade.....: " + mensalidade);
				System.out.println("[ 4 ] sexo do Aluno............: " + sexo);

				do {
					System.out.println(
							"Digite o numero do campo que deseja alterar (0 para finalizar as alteraÃ§Ãµes): ");
					opcao = Main.leia.nextByte();
				} while (opcao < 0 || opcao > 4);

				switch (opcao) {
				case 1:
					Main.leia.nextLine();
					System.out.print("Digite o NOVO NOME do Aluno..................: ");
					nomeAluno = Main.leia.nextLine();
					break;
				case 2:
					Main.leia.nextLine();
					System.out.print("Digite a NOVA DATA de Nascimento (DD/MM/AAAA): ");
					dtNasc = Main.leia.nextLine();
					break;
				case 3:
					System.out.print("Digite o NOVO VALOR da mensalidade...........: ");
					mensalidade = Main.leia.nextFloat();
					break;
				case 4:
					System.out.print("Digite o NOVO sexo do Aluno (M/F)............: ");
					sexo = Main.leia.next().charAt(0);
					break;
				}
				System.out.println();
			} while (opcao != 0);

			do {
				System.out.print("\nConfirma a alteracao dos dados (S/N) ? ");
				confirmacao = Main.leia.next().charAt(0);
				if (confirmacao == 'S') {
					desativarAluno(posicaoRegistro);
					salvarAluno();
					System.out.println("Dados gravados com sucesso !\n");
				}
			} while (confirmacao != 'S' && confirmacao != 'N');

		} while (!matricula.equals("FIM"));
	}

	// ************************ EXCLUSAO *****************************
	public void excluir() {
		String matriculaChave;
		char confirmacao;
		long posicaoRegistro = 0;

		do {
			do {
				Main.leia.nextLine();
				System.out.println(" ***************  EXCLUSAO DE ALUNOS  ***************** ");
				System.out.print("Digite o Codigo da Venda que deseja excluir ( FIM para encerrar ): ");
				matriculaChave = Main.leia.nextLine();
				if (matriculaChave.equals("FIM")) {
					break;
				}

				posicaoRegistro = pesquisarAluno(matriculaChave);
				if (posicaoRegistro == -1) {
					System.out.println("Matricula nao cadastrada no arquivo, digite outro valor\n");
				}
			} while (posicaoRegistro == -1);

			if (matriculaChave.equals("FIM")) {
				System.out.println("\n ************  PROGRAMA ENCERRADO  ************** \n");
				break;
			}

			System.out.println("Nome do aluno.......: " + nomeAluno);
			System.out.println("Data de nascimento..: " + dtNasc);
			System.out.println("Valor da mensalidade: " + mensalidade);
			System.out.println("Sexo do aluno.......: " + sexo);
			System.out.println();

			do {
				System.out.print("\nConfirma a exclusao deste aluno (S/N) ? ");
				confirmacao = Main.leia.next().charAt(0);
				if (confirmacao == 'S') {
					desativarAluno(posicaoRegistro);
				}
			} while (confirmacao != 'S' && confirmacao != 'N');

		} while (!matricula.equals("FIM"));
	}

	// ************************ CONSULTA *****************************
	public void consultar() {
		RandomAccessFile arqAluno;
		byte opcao;
		String matriculaChave;
		char sexoAux;
		long posicaoRegistro;

		do {
			do {
				System.out.println(" ***************  CONSULTA DE ALUNOS  ***************** ");
				System.out.println(" [1] CONSULTAR APENAS 1 ALUNO ");
				System.out.println(" [2] LISTA DE TODOS OS ALUNOS ");
				System.out.println(" [3] LISTA SOMENTE SEXO MASCULINO OU FEMININO ");
				System.out.println(" [0] SAIR");
				System.out.print("\nDigite a opcao desejada: ");
				opcao = Main.leia.nextByte();
				if (opcao < 0 || opcao > 3) {
					System.out.println("opcao Invalida, digite novamente.\n");
				}
			} while (opcao < 0 || opcao > 3);

			switch (opcao) {
			case 0:
				System.out.println("\n ************  PROGRAMA ENCERRADO  ************** \n");
				break;

			case 1: // consulta de uma unica matricula
				Main.leia.nextLine(); // limpa buffer de memoria
				System.out.print("Digite a Matriocula do Aluno: ");
				matriculaChave = Main.leia.nextLine();

				posicaoRegistro = pesquisarAluno(matriculaChave);
				if (posicaoRegistro == -1) {
					System.out.println("Matricula nao cadastrada no arquivo \n");
				} else {
					imprimirCabecalho();
					imprimirAluno();
					System.out.println("\n FIM DE RELATORIO - ENTER para continuar...\n");
					Main.leia.nextLine();
				}

				break;

			case 2: // imprime todos os alunos
				try {
					arqAluno = new RandomAccessFile("ALUNO.DAT", "rw");
					imprimirCabecalho();
					while (true) {
						ativo = arqAluno.readChar();
						matricula = arqAluno.readUTF();
						nomeAluno = arqAluno.readUTF();
						dtNasc = arqAluno.readUTF();
						mensalidade = arqAluno.readFloat();
						sexo = arqAluno.readChar();
						if (ativo == 'S') {
							imprimirAluno();
						}
					}
					// arqAluno.close();
				} catch (EOFException e) {
					System.out.println("\n FIM DE RELATORIO - ENTER para continuar...\n");
					Main.leia.nextLine();
					matriculaChave = Main.leia.nextLine();
				} catch (IOException e) {
					System.out.println("Erro na abertura do arquivo - programa sera finalizado");
					System.exit(0);
				}
				break;

			case 3: // imprime alunos do sexo desejado
				do {
					System.out.print("Digite o Sexo desejado (M/F): ");
					sexoAux = Main.leia.next().charAt(0);
					if (sexoAux != 'F' && sexoAux != 'M') {
						System.out.println("Sexo Invalido, digite M ou F");
					}
				} while (sexoAux != 'F' && sexoAux != 'M');

				try {
					arqAluno = new RandomAccessFile("ALUNO.DAT", "rw");
					imprimirCabecalho();
					while (true) {
						ativo = arqAluno.readChar();
						matricula = arqAluno.readUTF();
						nomeAluno = arqAluno.readUTF();
						dtNasc = arqAluno.readUTF();
						mensalidade = arqAluno.readFloat();
						sexo = arqAluno.readChar();

						if (sexoAux == sexo && ativo == 'S') {
							imprimirAluno();
						}
					}
				} catch (EOFException e) {
					System.out.println("\n FIM DE RELATORIO - ENTER para continuar...\n");
					Main.leia.nextLine();
					matriculaChave = Main.leia.nextLine();
				} catch (IOException e) {
					System.out.println("Erro na abertura do arquivo - programa sera finalizado");
					System.exit(0);
				}

			}

		} while (opcao != 0);
	}

	public void imprimirCabecalho() {
		System.out.println("-MATRICULA-  -------- NOME ALUNO ----------  --DATA NASC--  -Mensalidade-  -sexo- ");
	}

	public void imprimirAluno() {
		System.out.println(formatarString(matricula, 11) + "  " + formatarString(nomeAluno, 30) + "  "
				+ formatarString(dtNasc, 13) + "  " + formatarString(String.valueOf(mensalidade), 13) + "  "
				+ formatarString(Character.toString(sexo), 6));
	}

	public static String formatarString(String texto, int tamanho) {
		// retorna uma string com o numero de caracteres passado como parametro
		// em TAMANHO
		if (texto.length() > tamanho) {
			texto = texto.substring(0, tamanho);
		} else {
			while (texto.length() < tamanho) {
				texto = texto + " ";
			}
		}
		return texto;
	}

}
